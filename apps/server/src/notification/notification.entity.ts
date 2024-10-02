// @Entity()
// class Notification {
//   @PrimaryGeneratedColumn()
//   id: number;

//   @ManyToOne(() => User)
//   user: User;

//   @Column()
//   message: string;

//   @Column()
//   type: 'request_approved' | 'request_rejected' | 'other';

//   @Column({ default: false })
//   isRead: boolean;

//   @CreateDateColumn()
//   createdAt: Date;
// }
