class AddShelterIdToShelter < ActiveRecord::Migration[5.1]
  def change
    add_column :shelters, :shelter_id, :string
  end
end
