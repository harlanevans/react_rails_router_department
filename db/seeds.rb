5.times do
  d = Department.create(
  name: Faker::LordOfTheRings.location
  )
  10.times do
   i = d.items.create(
      title: Faker::Coffee.blend_name,
      description: Faker::MichaelScott.quote,
      price: Faker::Commerce.price.to_f
    )
    5.times do 
      i.reviews.create(
        title: Faker::ElderScrolls.region,
        body: Faker::Hipster.paragraph,
        author: Faker::LordOfTheRings.character,
        rating: rand(1..5),
      )
    end
  end
end

puts "Seeded Everything!"