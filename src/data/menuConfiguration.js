const drinkBases = [
    { id: 0, name: "Klasyczna", price: 1600 },
    { id: 1, name: "Mleczna (mleko zwykłe)", price: 1800 },
    { id: 2, name: "Mleczna (mleko sojowe)", price: 1800 },
];

const teaTypes = [
    { id: 0, name: "Czarna" },
    { id: 1, name: "Zielona" },
    { id: 2, name: "Oolong" },
];

const sizes = [
    { id: 0, name: "Zwykły", price: 0 },
    { id: 1, name: "Powiększony", price: 400 },
];

const syroups = [
    { id: 0, name: "Melon" },
    { id: 1, name: "Zielone jabłko" },
    { id: 2, name: "Ananas" },
    { id: 3, name: "Jagoda" },
    { id: 4, name: "Wiśnia" },
    { id: 5, name: "Biała brzoskwinia" },
];

const addonsByCategory = [
    {
        id: 0, categoryName: "Tapioka", addons: [
            { id: 1, name: "Mango" },
            { id: 2, name: "Marakuja" },
            { id: 3, name: "Truskawka" },
            { id: 4, name: "Kiwi" },
            { id: 5, name: "Wiśnia" },
            { id: 6, name: "Ananas" },
        ]
    },
    {
        id: 1, categoryName: "Żelki", addons: [
            { id: 7, name: "Zielone jabłko" },
            { id: 8, name: "Winogrono" },
            { id: 9, name: "Liczi" },
        ]
    },
];

const ownCupDiscountPercent = 20;

const addons = addonsByCategory.flatMap(c => c.addons.map(a => { return { id: a.id, name: a.name, categoryId: c.id, categoryName: c.categoryName }}))

export { addons, addonsByCategory, drinkBases, sizes, teaTypes, syroups, ownCupDiscountPercent }