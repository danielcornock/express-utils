export class StubCreator {
  static create<T>(stubbedClass: any): T {
    return (new stubbedClass() as Partial<T>) as T;
  }

  static fake<T>(stubbedClass: any): T {
    return (stubbedClass as Partial<T>) as T;
  }
}
