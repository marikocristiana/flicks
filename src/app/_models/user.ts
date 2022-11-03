import { Role } from "./role";

export interface User {
  email:    string,
  role:     Role,
  uid:      string,
  zipcode:  string,
  verified: boolean
}
