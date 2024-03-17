# frozen_string_literal: true

json.id @comment.id
json.content @comment.content
json.user do
  json.id @comment.user.id
  json.username @comment.user.username
end
json.created_at @comment.created_at