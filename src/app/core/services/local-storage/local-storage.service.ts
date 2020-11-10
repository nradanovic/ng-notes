import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class LocalStorageService {

    public setItem<T>(key: string, content: T) {
        const stringifyContent = JSON.stringify(content);
        try {
            localStorage.setItem(key, stringifyContent);
        } catch (error) {
            return
        }
    }

    public getItem<T>(key: string): T {
        const storageContent = localStorage.getItem(key);
        if (storageContent) {
            try {
                return JSON.parse(storageContent) as T;
            } catch (error) {
                return null;
            }

        }
    }
}
