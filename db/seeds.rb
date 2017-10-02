# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(name: "Scott")
User.create(name: "Carmen")
User.create(name: "Sara")
User.create(name: "Marissa")
User.create(name: "Vivian")

Shelter.create(phone: "123-456-7890", address: "123 Main Street, San Francisco, CA")
Shelter.create(phone: "234-567-8901", address: "234 Main Street, San Francisco, CA")
Shelter.create(phone: "345-678-9012", address: "345 Main Street, San Francisco, CA")
Shelter.create(phone: "456-789-0123", address: "456 Main Street, San Francisco, CA")
Shelter.create(phone: "567-890-1234", address: "567 Main Street, San Francisco, CA")

Dog.create(name: "Fido", size: "S", age: "Young", gender: "M", shelter_id: 1)
Dog.create(name: "Fluffy", size: "M", age: "Adult", gender: "F", shelter_id: 2)
Dog.create(name: "Spot", size: "L", age: "Senior", gender: "M", shelter_id: 3)
Dog.create(name: "Clyde", size: "S", age: "Baby", gender: "F", shelter_id: 4)
Dog.create(name: "Blackie", size: "M", age: "Young", gender: "F", shelter_id: 5)

Favorite.create(user_id: 1, dog_id: 1)
Favorite.create(user_id: 2, dog_id: 2)
Favorite.create(user_id: 3, dog_id: 3)
Favorite.create(user_id: 4, dog_id: 4)
Favorite.create(user_id: 5, dog_id: 5)







