public class CourseRegistration {

    private Student student;
    private Course course;

    public CourseRegistration(Student student, Course course) {
        this.student = student;
        this.course = course;
    }

    public void register() {
        student.registerCourse(course);
    }

    public void cancel() {
        student.cancelRegistration(course);
    }
}
