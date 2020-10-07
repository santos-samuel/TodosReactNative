class Todo < ApplicationRecord
  validates :title, :description, :date, presence: true
end
