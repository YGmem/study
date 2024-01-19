import javax.persistence.*;
import java.util.Date;
import java.util.List;
import java.util.Map;

public class User {
    private String name;
    private int age;
    private boolean isActive;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public boolean getIsActive() {
        return isActive;
    }

    public void setIsActive(boolean isActive) {
        this.isActive = isActive;
    }
}


@Entity
@Table(name = "user2")
public class User2 {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String username;

    @Column
    private String password;

    @Column
    private int age;

    @Column
    private float weight;

    @Column
    private double balance;

    @Column
    private boolean active;

    @Column
    @Temporal(TemporalType.DATE)
    private Date birthDate;

    @ElementCollection
    private List<String> roles;

    @ElementCollection
    private Map<String, String> attributes;

    // getters and setters
}