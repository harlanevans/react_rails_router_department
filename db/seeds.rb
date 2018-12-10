5.times do
  d = Department.create(
  name: Faker::LordOfTheRings.location
  )
  10.times do
    d.items.create(
      title: Faker::Coffee.blend_name,
      description: Faker::MichaelScott.quote,
      price: Faker::Commerce.price.to_f
    )
  end
end

puts "Seeded!"