import {gql} from "apollo-boost"

export const LOG_IN = gql`
    mutation requestSecret($email:String!){
        requestSecret(email:$email)
    }
`

export const CREATE_ACCOUNT = gql`
    mutation createAccount(
        $username: String!
        $emai: String!
        $firstName: String
        $lastName: String
    ){
        createAccount(
            username: $username
            emai: $email
            firstName: $firstName
            lastName: $lastName
        )
    }
`