describe('Registry', function() {

    it('Registry sınıfı tanımlı mı?', function() {
        expect(Registry).toBeDefined();
    });

    it('Registry sınıfına ait tüm methodlar tanımlı mı?', function() {
        expect(Registry.get).toBeDefined();
        expect(Registry.set).toBeDefined();
        expect(Registry.remove).toBeDefined();
    });

    it('Registry.get - parametresiz kullanım', function() {
        expect(Registry.get()).toBeUndefined();
    });

    it('Registry.get - tanımlanmamış bir item\'i almaya çalışmak', function() {
        expect(Registry.get('____')).toBeUndefined();
    });

    it('Registry.set - undefined ya da null olarak key set etmek', function() {
        Registry.set(null, 'hello world!');
        Registry.set(undefined, 'hello moon');

        expect(Registry.get(null)).toBeUndefined();
        expect(Registry.get(undefined)).toBeUndefined()
    });

    it('Registry.set - value olmadan set kullanmak', function() {
        Registry.set('PLUGIN');
        expect(Registry.get('PLUGIN')).toBeUndefined();
    });

    it('Registry.set - doğru ve çalışan bir set', function() {
        Registry.set('TDD', 'Javascript');
        expect(Registry.get('TDD')).toEqual('Javascript');
    });

    it('Registry.remove - item silmek', function() {
        Registry.remove('TDD');
        expect(Registry.get('TDD')).toBeUndefined();
    });

});
