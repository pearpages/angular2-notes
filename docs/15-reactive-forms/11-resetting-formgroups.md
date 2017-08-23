# Updating and resetting FormGroups and FormControls

```typescript
  onAdd() {
    this.added.emit(this.parent.get('selector').value);
    // When resetting we also reset the html classes
    this.parent.get('selector').reset({ // Reset <--
      product_id: '',
      quantity: 10
    });
  }

  patch() {
    this.parent.get('selector').patchValue({
      product_id: ''
    });
  }

  set() {
    this.parent.get('selector').setValue({
      product_id: '14',
      quantity: 100
    });
  }
```
