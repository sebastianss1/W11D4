# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

user1 = User.new(username: "seb", email: "hello@hello.com", password: "hello1234")
user2 = User.new(username: "seb1", email: "hello1@hello.com", password: "hello12345")

$.ajax {
    method: "POST",
    url: "/api/users"
    data: { username: "hello", email: "hi@hi.com", password: "hello1234"}
}