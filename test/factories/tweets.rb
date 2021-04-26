FactoryBot.define do
  factory :tweet do
    body { "MyText" }
    likes_count { 1 }
    retweets_count { 1 }
  end
end
