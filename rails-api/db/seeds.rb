# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

SAMPLE_DIARIES = [
  { action_name: "インターン" },
  { action_name: "アルバイト" },
  { action_name: "開発" }
]

SAMPLE_DIARIES.each do |diary_params|
  Diary.create(diary_params)
end
