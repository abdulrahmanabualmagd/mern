create database AuthenticationSystem

go

use AuthenticationSystem

go

CREATE TABLE users (
    id INTEGER PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    created_at date DEFAULT CURRENT_TIMESTAMP,
    updated_at date DEFAULT CURRENT_TIMESTAMP,
    last_login date,
    status VARCHAR(20) DEFAULT 'active'
);

go

CREATE TABLE roles (
    id INTEGER PRIMARY KEY,
    NAME VARCHAR(50) UNIQUE NOT NULL,
    description TEXT
);

go

CREATE TABLE permissions (
    id INTEGER PRIMARY KEY,
    NAME VARCHAR(50) UNIQUE NOT NULL,
    description TEXT
);

go

CREATE TABLE user_roles (
    user_id INTEGER REFERENCES users(id),
    role_id INTEGER REFERENCES roles(id),
    PRIMARY KEY (user_id, role_id)
);

go

CREATE TABLE role_permissions (
    role_id INTEGER REFERENCES roles(id),
    permission_id INTEGER REFERENCES permissions(id),
    PRIMARY KEY (role_id, permission_id)
);

go

CREATE TABLE sessions (
    id INTEGER PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    token TEXT NOT NULL,
    created_at date DEFAULT CURRENT_TIMESTAMP,
    expires_at date,
    ip_address VARCHAR(45),
    user_agent TEXT
);

go

CREATE TABLE password_reset_tokens (
    id INTEGER PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    token TEXT NOT NULL,
    created_at date DEFAULT CURRENT_TIMESTAMP,
    expires_at date
);

go

CREATE TABLE email_verification_tokens (
    id INTEGER PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    token TEXT NOT NULL,
    created_at date DEFAULT CURRENT_TIMESTAMP,
    expires_at date
);

go

CREATE TABLE login_attempts (
    id INTEGER PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    TIMESTAMP date DEFAULT CURRENT_TIMESTAMP,
    ip_address VARCHAR(45),
    user_agent TEXT,
    SUCCESSFUL bit
);