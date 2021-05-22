/**
 * @jest-environment jsdom
 */
 import { pushToHistory } from '../scripts/router.js';
 describe('history stack length and current state object', () => {
    
    test('settings', () => {
        let tester = pushToHistory('settings', 0);
        expect(tester.state.page).toBe('settings');
        expect(tester.length).toBe(2);
      });

      test('home', () => {
        let tester = pushToHistory('', 0);
        expect(tester.state.page).toBeUndefined();
        expect(tester.length).toBe(3);
      });

      test('entry1', () => {
        let tester = pushToHistory('entry', 1);
        expect(tester.state.page).toBe('entry1');
        expect(tester.length).toBe(4);
      });

      test('entry2', () => {
        let tester = pushToHistory('entry', 2);
        expect(tester.state.page).toBe('entry2');
        expect(tester.length).toBe(5);
      });

      test('entry3', () => {
        let tester = pushToHistory('entry', 3);
        expect(tester.state.page).toBe('entry3');
        expect(tester.length).toBe(6);
      });

      test('entry4', () => {
        let tester = pushToHistory('entry', 4);
        expect(tester.state.page).toBe('entry4');
        expect(tester.length).toBe(7);
      });

      test('entry5', () => {
        let tester = pushToHistory('entry', 5);
        expect(tester.state.page).toBe('entry5');
        expect(tester.length).toBe(8);
      });

      test('entry6', () => {
        let tester = pushToHistory('entry', 6);
        expect(tester.state.page).toBe('entry6');
        expect(tester.length).toBe(9);
      });

      test('entry7', () => {
        let tester = pushToHistory('entry', 7);
        expect(tester.state.page).toBe('entry7');
        expect(tester.length).toBe(10);
      });

      test('entry8', () => {
        let tester = pushToHistory('entry', 8);
        expect(tester.state.page).toBe('entry8');
        expect(tester.length).toBe(11);
      });

      test('entry9', () => {
        let tester = pushToHistory('entry', 9);
        expect(tester.state.page).toBe('entry9');
        expect(tester.length).toBe(12);
      });

      test('entry10', () => {
        let tester = pushToHistory('entry', 10);
        expect(tester.state.page).toBe('entry10');
        expect(tester.length).toBe(13);
      });
 });


