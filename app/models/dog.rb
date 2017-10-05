class Dog < ApplicationRecord
  has_many :favorites
  has_many :user, through: :favorites
  belongs_to :shelter

end
