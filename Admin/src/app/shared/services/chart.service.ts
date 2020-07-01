import { Injectable } from '@angular/core';

export class CountryInfo {
    country: string;
    hydro: number;
    oil: number;
    gas: number;
    coal: number;
    nuclear: number;
}

export class EnergyDescription {
    value: string;
    name: string;
}
export class Customer {
    
    Bots: string;
    Status: string;
    Port: number;
    IpAddress: string;
    Location: string;
    View: string;
    Edit: string;
}
export class newbot {
    
    Bots: string;
    Status: string;
    Port: number;
    Location: string;
    View: string;
    Edit: string;
}
let Groups: string[] = [
    "Group A",
    "Group B",
    "Group C",
    "Group D",
    "Group E",
    "Group F",
    "Group G",
    "Group H",
    "Group I",
    
];


let energySources: EnergyDescription[] = [
    { value: "hydro", name: "Bot A" },
    { value: "oil", name: "Bot B" },
    { value: "gas", name: "Bot C" },
    { value: "coal", name: "Bot D" },
    { value: "nuclear", name: "Bot E" }
];

let countriesInfo: CountryInfo[]  = [{
    country: "2 jan,Thursday",
    hydro: 30,
    oil: 40,
    gas: 10,
    coal: 80,
    nuclear: 35
}, {
    country: "6 jan,Monday ",
    hydro: 20,
    oil: 45,
    gas: 72,
    coal: 93,
    nuclear: 11
}, {
    country: "10 jan,Friday",
    hydro: 40,
    oil: 28,
    gas: 61,
    coal: 100,
    nuclear: 32
}, {
    country: "14 jan,Tuesday",
    hydro: 22,
    oil: 41,
    gas: 64,
    coal: 20,
    nuclear: 64
}, {
    country:"18 jan,Saturday",
    hydro: 19,
    oil: 93,
    gas: 28,
    coal: 48,
    nuclear: 38
}, {
    country: "22 jan, Wednesday",
    hydro: 61,
    oil: 36,
    gas: 73,
    coal: 57,
    nuclear: 78
}];

let customers: Customer[] = [{
    
    Bots: "BOT A",
    Status: "13 Aug, 2018, Active",
    Port: 8888,
    Location: "New York",
    View: "Options",
    Edit: "Details",
    IpAddress: "64.57.667.81",
   
}, {
    Bots: "BOT B",
    Status: "13 Aug, 2018, InActive",
    Port: 8888,
    Location: "Ontario",
    View: "Options",
    Edit: "Details",
    IpAddress: "64.57.667.82",
}, {
    Bots: "BOT C",
    Status: "13 Aug, 2018,Unreachable",
    Port: 8889,
    Location: "Milan",
    View: "Options",
    Edit: "Details",
    IpAddress: "64.57.667.83",
}, {
    Bots: "BOT D",
    Status: "13 Aug, 2018, Active",
    Port: 8889,
    Location: "Las Vegas",
    View: "Options",
    Edit: "Details",
    IpAddress: "64.57.667.84",
}, {
    Bots: "BOT E",
    Status: "13 Aug, 2018, Inactive",
    Port: 8889,
    Location: "San Francisco",
    View: "Options",
    Edit: "Details",
    IpAddress: "64.57.667.85",
}];




@Injectable({
    providedIn: "root"
})
export class ChartService {
    getEnergySources(): EnergyDescription[] {
        return energySources;
    }
    getCountriesInfo(): CountryInfo[] {
        return countriesInfo;
    }
    getCustomers() {
        return customers;
    }
    getSimpleProducts(): string[] {
        return Groups;
    }
  
}