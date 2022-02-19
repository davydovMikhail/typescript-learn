// enum -- вспомогательнаясущность которая помогаетлучше структурировать код если есть однотипоные элементы
enum Membership {
    Simple,
    Standart,
    Premium
}

const membership = Membership.Standart
const membershipReverse = Membership[2]

console.log(membership)
console.log(membershipReverse)