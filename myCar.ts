interface Exterior {
    color: string;
    numOfDoors: number;
}

interface Interior {
    seats: number;
    auto: boolean;
}

interface Car extends Exterior, Interior {
    make: string;
    model: string;
    year: number;
}

