# frozen_string_literal: true

json.posts @posts do |post|
  json.id               post.id
  json.data             post.data
  json.comments_count    post.comments_count
  json.likes_count       post.likes_count
  json.liked_by_me       post.likes.exists?(user_id: current_user.id) if current_user.present?
  
  json.user do
    json.id             post.user_id
    json.username       post.username
  end
end
