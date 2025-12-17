public class User {

    protected String userId;
    private  String name;
    protected String email;
    protected String password;
    protected boolean userRole; // true = Admin , false = Student

    public User() {}

    public User(String userId, String name, String email,
                String password, boolean userRole) {
        this.userId = userId;
        this.name = name;
        this.email = email;
        this.password = password;
        this.userRole = userRole;
    }

    public boolean login(String email, String password) {
        return this.email.equals(email) && this.password.equals(password);
    }

    public void logout() {
        System.out.println("Logged out");
    }

    protected boolean isAdmin() {
        return userRole;
    }

    public String getName() {
        return name;
    }
}
