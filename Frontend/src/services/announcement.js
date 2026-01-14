import api from './api';

export const announcementService = {
  getAll: () => api.get('/announcements'),
  getById: (id) => api.get(`/announcements/${id}`),
};
