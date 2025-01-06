interface MusicLabel {
    id: number;
    name: string;
    founded: number;
    country: string;
    artists: string[];
}

const mockLabelData: MusicLabel[] = [
    {
        id: 1,
        name: "Universal Music Group",
        founded: 1934,
        country: "United States",
        artists: ["Taylor Swift", "Drake", "Ariana Grande"]
    },
    {
        id: 2,
        name: "Sony Music Entertainment",
        founded: 1929,
        country: "Japan",
        artists: ["Beyoncé", "Adele", "Shakira"]
    },
    {
        id: 3,
        name: "Warner Music Group",
        founded: 1958,
        country: "United States",
        artists: ["Ed Sheeran", "Bruno Mars", "Cardi B"]
    }
,
{
    id: 4,
    name: "EMI Records",
    founded: 1931,
    country: "United Kingdom",
    artists: ["The Beatles", "Queen", "Coldplay"]
},
{
    id: 5,
    name: "BMG Rights Management",
    founded: 2008,
    country: "Germany",
    artists: ["Kylie Minogue", "Avril Lavigne", "Blink-182"]
},
{
    id: 6,
    name: "Capitol Records",
    founded: 1942,
    country: "United States",
    artists: ["Katy Perry", "Sam Smith", "Halsey"]
},
{
    id: 7,
    name: "Island Records",
    founded: 1959,
    country: "United Kingdom",
    artists: ["U2", "Bob Marley", "Demi Lovato"]
},
{
    id: 8,
    name: "RCA Records",
    founded: 1929,
    country: "United States",
    artists: ["Elvis Presley", "Justin Timberlake", "Britney Spears"]
},
{
    id: 9,
    name: "Atlantic Records",
    founded: 1947,
    country: "United States",
    artists: ["Led Zeppelin", "Aretha Franklin", "Lizzo"]
},
{
    id: 10,
    name: "Columbia Records",
    founded: 1887,
    country: "United States",
    artists: ["Alicia Keys", "John Mayer", "Bruce Springsteen"]
}
];

export default mockLabelData;