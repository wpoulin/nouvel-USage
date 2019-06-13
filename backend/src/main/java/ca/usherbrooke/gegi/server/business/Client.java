package ca.usherbrooke.gegi.server.business;

public class Client {
    private Integer id_client;
    private String first_name;
    private String last_name;
    private String username;
    private String password;
    private String email;
    private String phone;
    private String cell_phone;
    private String ville;
    private Integer cote_seller;

    public Integer getIdClient() {
        return id_client;
    }
    public void setIdClient(Integer p_idClient) {
        this.id_client = p_idClient;
    }

    public String getFirstName() {
        return first_name;
    }
    public void setFirstName(String firstName) {
        this.first_name = firstName;
    }

    public String getLastName() {
        return last_name;
    }
    public void setLastName(String p_firstName) {this.last_name = p_firstName; }

    public String getUsername() {
        return username;
    }
    public void setUsername(String p_username) {this.username = p_username; }

    public String getPassword() {
        return password;
    }
    public void setPassword(String p_password) {this.password = p_password; }

    public String getEmail() {
        return email;
    }
    public void setEmail(String p_email) {this.email = p_email; }

    public String getPhone() {
        return phone;
    }
    public void setPhone(String p_phone) {this.phone = p_phone; }

    public String getCellPhone() {
        return cell_phone;
    }
    public void setCellPhone(String p_cellPhone) {this.cell_phone = p_cellPhone; }

    public String getVille() {
        return ville;
    }
    public void setVille(String p_ville) {this.ville = p_ville; }

    public Integer getCoteSeller() {
        return cote_seller;
    }
    public void setCoteSeller(Integer p_coteSeller) {this.cote_seller = p_coteSeller; }

    @Override
    public String toString() {
        return "User{" +
                "id_client=" + id_client +
                ", first_name='" + first_name + '\'' +
                ", last_name='" + last_name + '\'' +
                ", username='" + username + '\'' +
                ", password='" + password + '\'' +
                ", email='" + email + '\'' +
                ", phone='" + phone + '\'' +
                ", cell_phone='" + cell_phone + '\'' +
                ", ville='" + ville + '\'' +
                ", cote_seller='" + cote_seller + '\'' +
                '}';
    }
}
