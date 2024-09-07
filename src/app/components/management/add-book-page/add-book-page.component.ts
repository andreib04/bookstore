import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Book } from '../../../models/book';
import { BooksService } from '../../../services/books.service';

@Component({
  selector: 'app-add-book-page',
  templateUrl: './add-book-page.component.html',
  styleUrl: './add-book-page.component.scss'
})
export class AddBookPageComponent {
  selectedFile: File | null = null;


  form: FormGroup = new FormGroup({
    title: new FormControl<string>('', [Validators.required]),
    author: new FormControl<string>('', [Validators.required]),
    description: new FormControl<string>('', [Validators.required]),
    price: new FormControl<string>('', [Validators.required]),
    image: new FormControl<string | null>(null, [Validators.required])
  });

  constructor(private bookService: BooksService){}

  onFileSelected(event: any): void{
    const file = event.target.files[0];
    if(file){
      this.convertToBase64(file).then((base64: string) => {
        this.form.patchValue({image:base64});
        this.form.get('image')!.updateValueAndValidity();
      })
    }
  }

  convertToBase64(file: File): Promise<string>{
    return new Promise<string>((resolve, reject) => {
      const reader = new FileReader();

      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = error => reject(error);
    })
  }

  onSubmit(){
    if(this.form.valid){
      const book: Book = {
        ...this.form.value,
        image: this.form.get('image')!.value
      };

      this.bookService.postBook(book).subscribe(res => {
        console.log('Book created', res);
      });
    }
  }
}
