# frozen_string_literal: true

json.posts @posts do |post|
  json.id               post.id
  json.data             post.data
  json.comment_count    post.comment_count
  json.like_count       post.like_count
  
  json.user do
    json.id             post.user_id
    json.username       post.username
  end
end
