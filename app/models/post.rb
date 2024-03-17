class Post < ApplicationRecord
  has_many_attached :images

  belongs_to :user
  has_many :comments, dependent: :destroy, counter_cache: true
  has_many :likes, dependent: :destroy, counter_cache: true

  delegate :user_name, to: :user
end
