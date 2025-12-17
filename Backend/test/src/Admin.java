public class Admin extends User {

    public Admin(String userId, String name, String email, String password) {
        super(userId, name, email, password, true); // true = Admin
    }

    private void checkAccess() {
        if (!isAdmin()) {
            throw new SecurityException("Access Denied: Admin only");
        }
    }

    public void addStudent(Student student) {
        checkAccess();
    
        System.out.println("Student added: " + student.getName());
    }
    

    public void editStudent(Student student) {
        checkAccess();
        System.out.println("Student edited");
    }

    public void deleteStudent(Student student) {
        checkAccess();
        System.out.println("Student deleted");
    }

    public void addCourse(Course course) {
        checkAccess();
        System.out.println("Course added");
    }

    public void deleteCourse(Course course) {
        checkAccess();
        System.out.println("Course deleted");
    }
public void viewStudentCourses(Student student) {
    checkAccess();

    System.out.println("Courses registered by " + student.getName() + ":");

    if (student.getRegisteredCourses().isEmpty()) {
        System.out.println("No courses registered.");
        return;
    }

    for (Course course : student.getRegisteredCourses()) {
        System.out.println(
            course.getCourseCode() + " - " + course.getCourseName()
        );
    }
}

}
