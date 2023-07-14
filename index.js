let companies = [
    {
        name: "Rustam nosfrush",
        budget: 20000,
        tax: 12,
        expenses: [
            {
                title: "pockets",
                total: 3000,
            },
            {
                title: "rent",
                total: 5000,
            },
            {
                title: "transfer",
                total: 1000,
            },
        ]
    },
    {
        name: "Axror mashennik",
        budget: 100000,
        tax: 7,
        expenses: [
            {
                title: "idea",
                total: 10000,
            },
            {
                title: "rent",
                total: 14000,
            },
            {
                title: "car",
                total: 400,
            },
        ]
    },
    {
        name: "Xojimurod phones",
        budget: 70000,
        tax: 14,
        expenses: [
            {
                title: "goods",
                total: 30000,
            },
            {
                title: "rent",
                total: 2000,
            },
            {
                title: "tools",
                total: 1200,
            },
        ]
    },
    {
        name: "Ruxshod games",
        budget: 50000,
        tax: 14,
        expenses: [
            {
                title: "oborudovaniye",
                total: 13000,
            },
            {
                title: "rent",
                total: 800,
            },
            {
                title: "salary",
                total: 500,
            },
        ]
    }, 
]
let a = []
let b = []
for(let item of companies) {
    item.expensesPerMonth = 0

    for (let exp of item.expenses) {
     item.expensesPerMonth +=exp.total/12

    }
    item.expensesPerMonth=Math.round(item.expensesPerMonth)
    console.log(
        item.tax * (item.budget/12) / 100 
    );
    let vseexp=item.expensesPerMonth+(item.tax* (item.budget))
   if 
   (vseexp<=item.budget/12) 
   
   
   { a.push(item)
}
else{b.push(item)}  
} 

console.log(companies)
console.log('плюс', a)
console.log('минус', b)
// Посчитать месячцные расходы каждой компании и сохранить в новом ключе expensesPerMonth
