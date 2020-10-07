class Todo < ApplicationRecord
  validates :title, presence: true
  validates :description, presence: true
  validates :completed, presence: true
  validates :date, presence: true
end
