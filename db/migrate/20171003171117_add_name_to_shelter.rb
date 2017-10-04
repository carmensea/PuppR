class AddNameToShelter < ActiveRecord::Migration[5.1]
  def change
    add_column :shelters, :name, :string
  end
end
