# frozen_string_literal: true
  
json.id                 @post.id
json.data               @post.data
json.comments_count     @post.comments_count
json.likes_count        @post.likes_count

json.user do
  json.id             @post.user_id
  json.username       @post.username
end