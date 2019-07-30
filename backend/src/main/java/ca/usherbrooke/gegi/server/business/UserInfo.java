package ca.usherbrooke.gegi.server.business;

public class UserInfo {
    private String cip;
    private String first_name;
    private String last_name;
    private String username;
    private String email;
    private String phone;

    public String getCIP() { return cip; }
    public void setCIP(String p_cip) {this.cip = p_cip; }

    public String getFirstName() { return first_name;}
    public void setFirstName(String firstName) {
        this.first_name = firstName;
    }

    public String getLastName() {
        return last_name;
    }
    public void setLastName(String p_lastName) {this.last_name = p_lastName; }

    public String getUsername() {
        return username;
    }
    public void setUsername(String p_username) {this.username = p_username; }

    public String getEmail() {
        return email;
    }
    public void setEmail(String p_email) {this.email = p_email; }

    public String getPhone() {
        return phone;
    }
    public void setPhone(String p_phone) {this.phone = p_phone; }

    @Override
    public String toString() {
        return "User{" +
                "cip='" + cip + '\'' +
                ", first_name='" + first_name + '\'' +
                ", last_name='" + last_name + '\'' +
                ", username='" + username + '\'' +
                ", email='" + email + '\'' +
                ", phone='" + phone + '\'' +
                '}';
    }
}
