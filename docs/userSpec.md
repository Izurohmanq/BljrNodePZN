# Buat RestFul API

## Register User API
Endpoint : POST /api/users

Request Body: 

```json
{
    "Username" : "asw",
    "password" : "rahasia",
    "name" : "asw"
}

```

Response body success 

```json
{
    "data" : {
        "username" : "asw",
        "name":"asw",
        "message" : "berhasil"
    }
}
```

Response body error

```json
{
    "error" : "already registered"
}

```
## Login User API
Endpoint : POST /api/users/

Request Body: 

```json
{
    "Username" : "asw",
    "password" : "rahasia",
}

```

Response body success 

```json
{
    "data" : {
        "token" : "unique-token"
    }
}
```

Response body error

```json
{
    "error" : "username or password wrong"
}

```

## Update User API
Endpoint : PATCH /api/users/current

Headers:
- Authorization : token

Request Body: 

```json
{
    "name" : "aswbgt", //optional
    "password" : "rahasia", //optional
}

```

Response body success 

```json
{
    "data" : {
        "username" : "asw",
        "name": "aswbgt",

    }
}
```

Response body error

```json
{
    "error" : "something wrong"
}

```

## GET User API

Endpoint : POST /api/users/login

Headers:
- Authorization : token

Request Body: 

```json
{
    "Username" : "asw",
    "password" : "rahasia",
}

```

Response body success 

```json
{
    "data" : {
        "username" : "asw",
        "name":"aswbgt"
    }
}
```

Response body error

```json
{
    "error" : "Unauthorized"
}

```

## Logout User API

Endpoint : POST /api/users/logout

Headers:
- Authorization : token

Response body success : 
```json

{
    "data" : "oke"
}

```

Response body failed:

```json

{
    "error" : "Unauthorized"
}

```
