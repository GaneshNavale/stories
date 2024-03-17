class Post < ApplicationRecord
  has_many_attached :images

  belongs_to :user
  has_many :comments, dependent: :destroy
  has_many :likes, dependent: :destroy

  delegate :username, to: :user
end
