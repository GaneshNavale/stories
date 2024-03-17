class User < ApplicationRecord
  include Devise::JWT::RevocationStrategies::JTIMatcher

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable, :trackable, :confirmable, :jwt_authenticatable, jwt_revocation_strategy: self

  has_many :posts

  def jwt_payload
    super.merge({id: self.id, email: self.email, first_name: self.first_name, last_name: self.last_name})
  end

  def username
    "#{first_name} #{last_name}"
  end

end
