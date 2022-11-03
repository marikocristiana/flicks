import { Roles } from "./roles";

export interface User {
  email:    string,
  roles:    Roles,
  uid:      string,
  zipcode:  string,
  verified: boolean
}
