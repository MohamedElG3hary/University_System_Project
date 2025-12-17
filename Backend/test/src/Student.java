import java.util.ArrayList;
import java.util.List;

public class Student extends User {

    private double gpa;
    private int level;
    private boolean status;
    private String department;
    private List<Course> registeredCourses;

    public Student() {
        this.userRole = false; // طالب
        registeredCourses = new ArrayList<>();
    }

    public Student(String userId, String name, String email,
                   String password, String department, int level) {

        super(userId, name, email, password, false); // false = Student
        this.department = department;
        this.level = level;
        this.status = true;
        registeredCourses = new ArrayList<>();
    }

    public void registerCourse(Course course) {
        registeredCourses.add(course);
    }

    public boolean cancelRegistration(Course course) {
        return registeredCourses.remove(course);
    }

    public List<Course> viewRegistration() {
        return registeredCourses;
    }

    public int calcTotalHours() {
        int total = 0;
        for (Course c : registeredCourses) {
            total += c.getCreditHours();
        }
        return total;
    }
}
