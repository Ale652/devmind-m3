package com.example.project_version_30032022.services;

import com.example.project_version_30032022.controllers.dto.ChangePasswordDTO;
import com.example.project_version_30032022.controllers.dto.LoginRequestDTO;
import com.example.project_version_30032022.controllers.dto.LoginResponseDTO;
import com.example.project_version_30032022.controllers.dto.RegisterRequestDTO;
import com.example.project_version_30032022.entities.Administrator;
import com.example.project_version_30032022.entities.Author;
import com.example.project_version_30032022.entities.Reader;
import com.example.project_version_30032022.entities.User;
import com.example.project_version_30032022.repositories.AdministratorRepository;
import com.example.project_version_30032022.repositories.AuthorRepository;
import com.example.project_version_30032022.repositories.ReaderRepository;
import com.example.project_version_30032022.repositories.UserRepository;
import com.example.project_version_30032022.security.Role;
import com.example.project_version_30032022.security.UserDetailsImplementation;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseCookie;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.Locale;
import java.util.stream.Collectors;

@Slf4j
@Service

public class UserService {

    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    UserRepository userRepository;

    @Autowired
    PasswordEncoder encoder;

    @Autowired
    JWTService jwtHelper;

    @Autowired
    AdministratorRepository administratorRepository;

    @Autowired
    ReaderRepository readerRepository;

    @Autowired
    AuthorRepository authorRpository;

    /*
     *     Executa logica de login pe baza adresei de email si parolei
     * */
    public ResponseEntity<?> login(@RequestBody LoginRequestDTO loginRequest) {

        Authentication authentication = authenticationManager
                .authenticate(new UsernamePasswordAuthenticationToken(loginRequest.getEmail(), loginRequest.getPassword()));

        SecurityContextHolder.getContext().setAuthentication(authentication);
        UserDetailsImplementation userDetails = (UserDetailsImplementation) authentication.getPrincipal();

        ResponseCookie jwtCookie = jwtHelper.generateJwtCookie(userDetails);

        String role = userDetails.getAuthorities().stream().map(GrantedAuthority::getAuthority).collect(Collectors.toList()).get(0);

        return ResponseEntity.ok().header(HttpHeaders.SET_COOKIE, jwtCookie.toString())
                .body(new LoginResponseDTO(userDetails.getEmail(), jwtCookie.getValue(), userDetails.getId(), role));
    }


    /*
     *     Executa logica de register pe baza adresei de email, a parolei si a tipului
     *     de utilizator ce trebuie creat (Administrator/ Author / Reader).
     * */
    @Transactional
    public ResponseEntity<?> register(@RequestBody RegisterRequestDTO registerRequestDTO) {
        if (userRepository.existsByEmail(registerRequestDTO.getEmail())) {
            throw new RuntimeException("Email used");
//            return ResponseEntity.badRequest().body("Email used");
        }

        String role = registerRequestDTO.getRole();
        // TODO: add more sanity checks (email, password, etc.)

        if (role == null || !(role.toUpperCase(Locale.ROOT).equals("READER") || role.toUpperCase(Locale.ROOT).equals("ADMIN")|| role.toUpperCase(Locale.ROOT).equals("AUTHOR"))) {
            throw new RuntimeException("Invalid role");
        }
        User user =  new User();
        if(role.equals("reader")) {

            Reader reader = new Reader();
            reader.setEmail(registerRequestDTO.getEmail());
            reader.setLastName(registerRequestDTO.getLastName());
            reader.setFirstName(registerRequestDTO.getFirstName());
//            reader.setPassword(encoder.encode(registerRequestDTO.getPassword()));

            readerRepository.save(reader);

            user.setEmail(registerRequestDTO.getEmail());
            user.setPassword(encoder.encode(registerRequestDTO.getPassword()));
            user.setRole(Role.READER);
//            user = new User(null, registerRequestDTO.getEmail(), encoder.encode(registerRequestDTO.getPassword()), Role.USER);
        }else if(role.equals("admin")){
            Administrator administrator = new Administrator();
            administrator.setEmail(registerRequestDTO.getEmail());
            administrator.setLastName(registerRequestDTO.getLastName());
            administrator.setFirstName(registerRequestDTO.getFirstName());
//            administrator.setPassword(encoder.encode(registerRequestDTO.getPassword()));

            administratorRepository.save(administrator);

            user.setEmail(registerRequestDTO.getEmail());
            user.setPassword(encoder.encode(registerRequestDTO.getPassword()));
            user.setRole(Role.ADMIN);
//            user = new User(null, registerRequestDTO.getEmail(), encoder.encode(registerRequestDTO.getPassword()), Role.ADMIN);
        }else if(role.equals("author")){

            Author author = new Author();

            author.setEmail(registerRequestDTO.getEmail());
            author.setLastName(registerRequestDTO.getLastName());
            author.setFirstName(registerRequestDTO.getFirstName());
//            author.setPassword(encoder.encode(registerRequestDTO.getPassword()));

            authorRpository.save(author);

            user.setEmail(registerRequestDTO.getEmail());
            user.setPassword(encoder.encode(registerRequestDTO.getPassword()));
            user.setRole(Role.READER);
//            user = new User(null, registerRequestDTO.getEmail(), encoder.encode(registerRequestDTO.getPassword()), Role.USER);
        }

        userRepository.save(user);
        return ResponseEntity.ok("User registered successfully!");
    }




    /*
    *     Permite modificarea adresei de email sau a parolei pentru un utilizator
     * */
    //TODO : pleae check it !
    public void changePasswordEmail(ChangePasswordDTO changePasswordDTO){

        if(!changePasswordDTO.getNewPassword().equals(changePasswordDTO.getConfirmNewpassword()))
            System.out.println("Please check the Confirmation Password !");

        User user = userRepository.findByEmail(changePasswordDTO.getEmail()).get();
        user.setPassword(changePasswordDTO.getNewPassword());

        userRepository.save(user);
    }


}
