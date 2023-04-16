CREATE TABLE IF NOT EXISTS Locations(
    lid INT NOT NULL PRIMARY KEY,
    total_loners INT
);

CREATE TABLE IF NOT EXISTS Tables
(
    tid        INT NOT NULL PRIMARY KEY,
    xPosition INT NOT NULL,
    yPosition INT NOT NULL,
    sitters   TEXT,
    lid INT NOT NULL,
    FOREIGN KEY (lid) REFERENCES Locations(lid)
);

CREATE TABLE IF NOT EXISTS User(
    uid INT  NOT NULL PRIMARY KEY,
    tid INT NOT NULL,
    status TEXT,
    FOREIGN KEY (tid) REFERENCES Tables(tid)
)
