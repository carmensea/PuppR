class CreatePetFinderAdapters < ActiveRecord::Migration[5.1]
  def change
    create_table :pet_finder_adapters do |t|

      t.timestamps
    end
  end
end
