public class Course {

    private String courseCode;
    private String courseName;
    private int creditHours;
    private String department;
    private String instructor;

    public Course(String courseCode, String courseName,
                  int creditHours, String department) {
        this.courseCode = courseCode;
        this.courseName = courseName;
        this.creditHours = creditHours;
        this.department = department;
    }

    // ===== Getters =====

    public String getCourseCode() {
        return courseCode;
    }

    public String getCourseName() {
        return courseName;
    }

    public int getCreditHours() {
        return creditHours;
    }

    public String getDepartment() {
        return department;
    }

    public String getInstructor() {
        return instructor;
    }

    // ===== Setters =====

    public void setCourseCode(String courseCode) {
        this.courseCode = courseCode;
    }

    public void setCourseName(String courseName) {
        this.courseName = courseName;
    }

    public void setCreditHours(int creditHours) {
        this.creditHours = creditHours;
    }

    public void setDepartment(String department) {
        this.department = department;
    }

    public void setInstructor(String instructor) {
        this.instructor = instructor;
    }

    // ===== Other Methods =====

    public boolean isAvailable() {
        return instructor != null;
    }
}
