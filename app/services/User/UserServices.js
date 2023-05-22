class UserServices {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async getUserById(userId) {
    try {
      return await this.userRepository.getUserById(userId);
    } catch (error) {
      console.error('Error getting user by ID:', error);
      throw error;
    }
  }

  async getAllUser() {
    try {
      const data = await this.userRepository.getAllUser();
      return {
        data: data,
      }
    } catch (error) {
      console.error('Error getting user by ID:', error);
      throw error;
    }}
}

module.exports = UserServices;