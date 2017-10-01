class AddDescriptionToDog < ActiveRecord::Migration[5.1]
  def change
    add_column :dogs, :description, :string
  end
end
