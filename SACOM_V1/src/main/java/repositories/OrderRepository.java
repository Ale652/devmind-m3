package repositories;

import models.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface OrderRepository  extends JpaRepository<Order, Integer> {
    Optional<Order> findById(Integer id);

//    @Query("SELECT * FROM orders o WHERE o.id = ?1")
//    List<Order> findByIdUsingQuery(Integer id);

}
