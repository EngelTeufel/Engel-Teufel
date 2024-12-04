const { PutCommand, GetCommand, QueryCommand, DeleteCommand, ScanCommand } = require('@aws-sdk/lib-dynamodb');
const { ddbDocClient } = require('../config/aws-config');
const { v4: uuidv4 } = require('uuid');

const TABLE_NAME = process.env.DYNAMODB_BLOG_TABLE;

const dynamoService = {
  // Blog-Beitrag erstellen
  createPost: async (postData) => {
    const params = {
      TableName: TABLE_NAME,
      Item: {
        id: uuidv4(),
        ...postData,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      }
    };

    try {
      await ddbDocClient.send(new PutCommand(params));
      return params.Item;
    } catch (error) {
      console.error('Fehler beim Erstellen des Posts:', error);
      throw error;
    }
  },

  // Alle Blog-Beiträge abrufen
  getAllPosts: async () => {
    const params = {
      TableName: TABLE_NAME,
    };

    try {
      const data = await ddbDocClient.send(new ScanCommand(params));
      return data.Items.sort((a, b) => b.createdAt.localeCompare(a.createdAt));
    } catch (error) {
      console.error('Fehler beim Abrufen der Posts:', error);
      throw error;
    }
  },

  // Einzelnen Blog-Beitrag abrufen
  getPost: async (postId) => {
    const params = {
      TableName: TABLE_NAME,
      Key: {
        id: postId
      }
    };

    try {
      const { Item } = await ddbDocClient.send(new GetCommand(params));
      return Item;
    } catch (error) {
      console.error('Fehler beim Abrufen des Posts:', error);
      throw error;
    }
  },

  // Blog-Beitrag aktualisieren
  updatePost: async (postId, postData) => {
    const params = {
      TableName: TABLE_NAME,
      Item: {
        id: postId,
        ...postData,
        updatedAt: new Date().toISOString()
      }
    };

    try {
      await ddbDocClient.send(new PutCommand(params));
      return params.Item;
    } catch (error) {
      console.error('Fehler beim Aktualisieren des Posts:', error);
      throw error;
    }
  },

  // Blog-Beitrag löschen
  deletePost: async (postId) => {
    const params = {
      TableName: TABLE_NAME,
      Key: {
        id: postId
      }
    };

    try {
      await ddbDocClient.send(new DeleteCommand(params));
      return { message: 'Post erfolgreich gelöscht' };
    } catch (error) {
      console.error('Fehler beim Löschen des Posts:', error);
      throw error;
    }
  },

  // Blog-Beiträge nach Kategorie filtern
  getPostsByCategory: async (category) => {
    const params = {
      TableName: TABLE_NAME,
      FilterExpression: 'category = :category',
      ExpressionAttributeValues: {
        ':category': category
      }
    };

    try {
      const data = await ddbDocClient.send(new ScanCommand(params));
      return data.Items.sort((a, b) => b.createdAt.localeCompare(a.createdAt));
    } catch (error) {
      console.error('Fehler beim Filtern der Posts:', error);
      throw error;
    }
  }
};

module.exports = dynamoService;
