require 'rails_helper'

RSpec.describe User, type: :model do
  let(:user) { User.new(name: "Scott", email: "scott@scott.com", password: "password") }
  let(:user_with_no_name) { User.new(email: "scott@scott.com", password: "password") }
  let(:user_with_long_name) { User.new(name: "ScottScottScottScottScottScottScottScottScottScottS", email: "scott@scott.com", password: "password") }
  let(:user_with_no_email) { User.new(name: "Scott", password: "password") }
  let(:user_with_blank_password) { User.new(name: "Scott", email: "scott@scott.com", password: "") }
  let(:user_with_password_less_than_six_characters) { User.new(name: "Scott", email: "scott@scott.com", password: "passw") }
  let(:user_with_duplicate_email_address) { User.new(name: "Bill", email: "scott@scott.com", password: "password") }
  let(:user_with_duplicate_email_address_with_different_case) { User.new(name: "Scott", email: "Scott@Scott.com", password: "password") }
  let(:user_with_invalidly_formed_email_address) { User.new(name: "Scott", email: "scott@scott", password: "password") }
  
  it "instantiates a User object" do           
  	expect(user).to be_instance_of User    
  end

  describe "validation failures" do	
  	context "problem with the name field" do
	  it "is not valid if name is not present" do           
	  	expect(user_with_no_name.valid?).to be false    
	  end

	  it "is not valid if name is longer than 50 characters" do           
	  	expect(user_with_long_name.valid?).to be false    
	  end
	end
	  
	context "problem with the email field" do
	  it "is not valid if email is not present" do           
	  	expect(user_with_no_email.valid?).to be false    
	  end

	  it "is not valid if the email address is not unique" do
	  	User.create(name: "Scott", email: "scott@scott.com", password: "password")
	  	expect(user_with_duplicate_email_address.valid?).to be false
	  end

	  it "is not valid if the email address is unique only by case" do
	  	User.create(name: "Scott", email: "scott@scott.com", password: "password")
	  	expect(user_with_duplicate_email_address_with_different_case.valid?).to be false
	  end

	  it "is not valid if the email address is not a validly-formatted email address" do
	  	expect(user_with_invalidly_formed_email_address.valid?).to be false
	  end
	end

	context "problem with the password field" do 
	  it "is not valid if password is blank" do           
	  	expect(user_with_blank_password.valid?).to be false    
	  end

	  it "is not valid if the password is not a minimum of six characters" do
	  	expect(user_with_password_less_than_six_characters.valid?).to be false
	  end
	end
   end
 end

