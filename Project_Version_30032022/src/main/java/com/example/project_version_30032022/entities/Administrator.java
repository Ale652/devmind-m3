package com.example.project_version_30032022;

public class Administrator extends User{

    // TODO:
    // REVIEW CONSTRUCTORs DEFINITION
    // Poate aproba / respinge publicarea unei noi carti de catre un autor
    // Poate sterge comentariile / review-ul unui utilizator

    // CONSTRUCTORS
    public Administrator(String email, String password, String firstName, String lastName) {
        super(email, password, firstName, lastName);
    }

    public Administrator() {
    }
}
